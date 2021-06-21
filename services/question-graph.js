function isString (s) {
  return typeof s === "string";
}

class Node {
  constructor (id, data) {
    this.id = id;
    this.data = data;
    this.edges = [];
    this.path = [];
  }
}

const noop = () => { };
class Edge {
  constructor (toId, question) {
    this.toId = toId;
    this.question = question || noop;
  }
}

class QuestionGraph {
  constructor () {
    this.nodeMap = new Map();
    this.questionMap = new Map();

    this.headIds = new Set();
    this.resultIds = new Set();
    this.nodeIds = new Set();
    this.final = false;
    this.head = new Node("headId");
  }

  addVertex (nodeId, data) {
    if (this.final) {
      throw new Error("Graph has been finalized");
    }

    const newNode = new Node(nodeId, data)
    this.nodeMap.set(nodeId, newNode);
    this.headIds.add(nodeId);

    return newNode;
  }

  addQuestion (questionId, data, addAsVertex) {
    if (this.final) {
      throw new Error("Graph has been finalized");
    }

    if (this.questionMap.has(questionId)) {
      throw new Error(`Result ${questionId} already exists as a question`);
    }

    if (this.resultIds.has(questionId)) {
      throw new Error(`Result ${questionId} already exists as a result`);
    }

    this.questionMap.set(questionId, data);

    if (addAsVertex) {
      this.addVertex(questionId, questionId);
    }
  }

  addResult (resultId, data) {
    if (this.final) {
      throw new Error("Graph has been finalized");
    }

    if (this.resultIds.has(resultId)) {
      throw new Error(`Result ${resultId} already exists as result`);
    }

    if (this.questionMap.has(resultId)) {
      throw new Error(`Result ${resultId} already exists as a question`);
    }

    this.resultIds.add(resultId);
    this.addVertex(resultId, data);
  }

  addEdge (fromId, toId, question) {
    if (this.final) {
      throw new Error("Graph has been finalized");
    }

    const fromNode = this.nodeMap.get(fromId);

    if (!fromNode) {
      throw new Error(`From node ${fromId} does not exist`);
    }

    const toNode = this.nodeMap.get(fromId);

    if (!toNode) {
      throw new Error(`To node ${toNode} does not exist`);
    }

    fromNode.edges.push(new Edge(toId, question));
    this.headIds.delete(toId);
  }

  finalize () {
    // make sure all questions lead to some result
    const allQuestionsAndResultsPossible = () => {
      const found = new Set();
      const vis = new Set();

      const dfs = (nodeId) => {
        if (!nodeId) {
          return;
        }

        if (vis.has(nodeId)) {
          return;
        }

        vis.add(nodeId);

        const node = this.nodeMap.get(nodeId);

        if (!node) {
          return;
        }

        const data = node.data;
        if (data && isString(data)) {
          found.add(data);
        }

        for (const edge of node.edges) {
          const toId = edge.toId;
          dfs(toId);
        }
      };

      for (const nodeId of this.headIds) {
        dfs(nodeId);
      }

      for (const entry of this.questionMap) {
        const key = entry[0];
        if (!found.has(key)) {
          // throw new Error(`Question ${key} is not linked in the graph`);
          console.warn(`removing question ${key}`);
          this.questionMap.delete(key);
          this.headIds.delete(key);
          this.nodeMap.delete(key);
          this.resultIds.delete(key);
          this.nodeIds.delete(key);
        }
      }

      for (const resultId of this.resultIds) {
        if (!vis.has(resultId)) {
          throw new Error(`Result ${resultId} is not linked in the graph`);
        }
      }
    };

    allQuestionsAndResultsPossible();

    const noResultsFromHead = () => {
      for (const headId of this.headIds) {
        if (this.resultIds.has(headId)) {
          console.warn(`removing head result ${headId}`);
          this.questionMap.delete(headId);
          this.headIds.delete(headId);
          this.nodeMap.delete(headId);
          this.resultIds.delete(headId)
          this.nodeIds.delete(headId)
        }
      }
    };

    noResultsFromHead();

    this.final = true;

    // setup head node;
    for (const headId of this.headIds) {
      this.head.edges.push(new Edge(headId));
    }
  }

  // bfs to find to next question based off data
  getNextQuestion (data = {}) {
    const vis = new Set();
    const q = [this.head];

    while (q.length) {
      const item = q.shift();
      if (!vis.has(item.id)) {
        vis.add(item.id);

        // check if submittable question
        if (item.data && isString(item.data)) {
          const questionId = item.data;
          if (data[questionId] == null) {
            const question = this.questionMap.get(questionId);
            return {
              questionId,
              question
            };
          }
        }

        for (const edge of item.edges) {
          const edgeRes = edge.question(data);

          // allow possibles
          if (edgeRes !== false) {
            q.push(this.nodeMap.get(edge.toId));
          }
        }
      }
    }
  }

  // bfs search to find all the valid questions.if not STOP;
  getRemainingQuestions (data = {}) {
    const vis = new Set();
    const questionIds = new Set();
    const q = [{ path: [{ [this.head.id]: true }], item: this.head }];

    while (q.length) {
      const queueItem = q.shift();
      const item = queueItem.item;
      let answered = false;
      let numberAnsweredInPath = 0;

      if (!vis.has(item.id)) {
        vis.add(item.id);

        // console.log(item.id)

        // check if submittable question
        if (item.data && isString(item.data)) {
          const questionId = item.data;

          // console.log(questionId);
          const path = queueItem.path.slice();
          numberAnsweredInPath = path.reduce((memo, path) => Object.values(path)[0] ? ++memo : memo, 0);
          answered = data[questionId] != null;
          queueItem.path.push({ [item.id]: answered });
          if (queueItem.path.length - numberAnsweredInPath < 3) {
            // console.log(questionId, queueItem.path);
            questionIds.add(questionId);
          }
        }

        // console.log(numberAnsweredInPath, queueItem.path, queueItem);
        for (const edge of item.edges) {
          const edgeRes = edge.question(data);

          // console.log(edge.toId, edgeRes);
          // allow possibles
          if (edgeRes !== false) {
            const node = this.nodeMap.get(edge.toId);
            q.push({ path: queueItem.path.slice(), item: node });
          }
        }
      }
    }

    // console.log('what questions', questionIds);
    const res = [];
    for (const questionId of questionIds) {
      const question = this.questionMap.get(questionId);
      res.push({
        questionId,
        question
      });
    }

    return res;
  }

    // bfs search to find all the valid questions.if not STOP;
  getAllQuestions (data = {}) {
      const vis = new Set();
      const questionIds = new Set();
      const q = [{ path: [this.head.id], item: this.head }];

      while (q.length) {
        const queueItem = q.shift();
        const item = queueItem.item;
        const answered = false;
        if (!vis.has(item.id)) {
          vis.add(item.id);

          // console.log(item.id)

          // check if submittable question
          if (item.data && isString(item.data)) {
            const questionId = item.data;
            questionIds.add(questionId);
          }

          // console.log(queueItem);
          for (const edge of item.edges) {
            const edgeRes = edge.question(data);

            // console.log(edge.toId, edgeRes);
            // allow possibles
            if (edgeRes !== false) {
              const node = this.nodeMap.get(edge.toId);
              q.push({ path: queueItem.path.slice().concat([answered, node.id]), item: node });
            }
          }
        }
      }

      // console.log('what questions', questionIds);
      const res = [];
      for (const questionId of questionIds) {
        const question = this.questionMap.get(questionId);
        res.push({
          questionId,
          question
        });
      }

      return res;
    }

  // bfs to find possible results / return the impossible results as well
  getPossibleResultsIds (data = {}) {
    const vis = new Set();
    const resultIds = new Set();
    const q = [this.head];

    while (q.length) {
      const item = q.shift();
      if (!vis.has(item.id)) {
        vis.add(item.id);

        // check if result
        if (item.data && !isString(item.data)) {
          const resultId = item.id;
          resultIds.add(resultId);
        }

        for (const edge of item.edges) {
          const edgeRes = edge.question(data);

          // allow possibles
          if (edgeRes !== false) {
            q.push(this.nodeMap.get(edge.toId));
          }
        }
      }
    }

    return Array.from(resultIds);
  }

  getPositiveResultsIds (data = {}) {
    const vis = new Set();
    const resultIds = new Set();
    const q = [this.head];
    const nodeMap = this.nodeMap;

    q.push.apply(q, this.head.edges.map(e => nodeMap.get(e.toId)));

    while (q.length) {
      const item = q.shift();
      if (!vis.has(item.id)) {
        vis.add(item.id);

        // check if result
        if (item.data && !isString(item.data)) {
          const resultId = item.id;
          resultIds.add(resultId);
        }

        for (const edge of item.edges) {
          const edgeRes = edge.question(data);

          if (edgeRes === true) {
            q.push(this.nodeMap.get(edge.toId));
          }
        }
      }
    }

    return Array.from(resultIds);
  }

  // bfs to find possible results
  getPossibleResults (data = {}) {
    const possibleResultIds = this.getPossibleResultsIds(data);
    return possibleResultIds.map((resultId) => {
      const result = this.nodeMap.get(resultId);
      return { resultId, result };
    });
  }

  getPositiveResults (data = {}) {
    const positiveResultIds = this.getPositiveResultsIds(data);
    // console.log(positiveResultIds);
    return positiveResultIds.map((resultId, i) => {
      const result = this.nodeMap.get(resultId);
      return { resultId, result };
    });
  }

  // bfs to find the impossible results
  getImpossibleResults (data = {}) {
    const impossibleResultIds = [];
    const possibleResultIds = new Set(this.getPossibleResultsIds(data));
    for (const resultId of this.resultIds) {
      if (!possibleResultIds.has(resultId)) {
        impossibleResultIds.push(resultId);
      }
    }

    return impossibleResultIds.map((resultId) => {
      const result = this.nodeMap.get(resultId);
      return { resultId, result };
    });
  }

  getCompletedQuestions (data = {}) {
    const results = [];

    for (const [questionId, question] of this.questionMap) {
      if (data[questionId] != null) {
        results.push({ ...question, questionId });
      }
    }

    return results;
  }
}

module.exports = { QuestionGraph };
