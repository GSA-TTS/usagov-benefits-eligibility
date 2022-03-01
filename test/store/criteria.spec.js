import { state, mutations, getters, actions } from "@/store/criteria"

const mockCriteria = () => [
  {
    criteriaKey: "deceased_death_circumstance",
    criteriaKeyHash: "acbca85",
    label: "One of the following circumstances apply to the deceased",
    type: "select",
    values:
      "died as a result of a service-connected disability; died while receiving or traveling to receive VA care; died while eligible, pending to receive, or receiving VA compensation or pension"
  },
  {
    criteriaKey: "applicant_relationship",
    criteriaKeyHash: "8f306c9",
    label: "Your (applicant's) relationship to the deceased is",
    type: "select",
    values:
      "spouse; child; other family member; personal or official representative"
  }
]

describe("criteria", () => {
  describe("mutations", () => {
    it("should preloaded responses", () => {
      const storeState = state()
      const criteria = mockCriteria()
      mutations.populateCriterion(storeState, {
        hash: criteria[0].criteriaKeyHash,
        criterion: criteria[0]
      })
      mutations.preloadedResponse(storeState, {
        response: true,
        criteriaKeyHash: criteria[0].criteriaKeyHash
      })
      mutations.preloadedResponse(storeState, {
        response: "spouse",
        criteriaKeyHash: criteria[1].criteriaKeyHash
      })
      mutations.populateCriterion(storeState, {
        hash: criteria[1].criteriaKeyHash,
        criterion: criteria[1]
      })
      expect(
        storeState.eligibilityCriteria[criteria[0].criteriaKey].response
      ).toBe(true)
      expect(storeState.preloadedResponses[criteria[1].criteriaKeyHash]).toBe(
        "spouse"
      )
      expect(
        storeState.eligibilityCriteria[criteria[1].criteriaKey].response
      ).toBe("spouse")
    })
    it("should populate criterion", () => {
      const storeState = state()
      const criterion = mockCriteria()[0]
      mutations.populateCriterion(storeState, {
        hash: criterion.criteriaKeyHash,
        criterion
      })
      expect(
        storeState.eligibilityCriteria[criterion.criteriaKey]
      ).toBeDefined()
      expect(storeState.hashToCriteria[criterion.criteriaKeyHash]).toBeDefined()
    })
  })
  describe("actions", () => {
    it("should populate eligibility criteria", async () => {
      const storeState = state()
      const commit = jest.fn()
      await actions.populate({ commit, state }, mockCriteria())
      expect(commit.mock.calls.length).toBe(2)
      expect(commit.mock.calls[0][0]).toBe("populateCriterion")
      expect(commit.mock.calls[0][1].hash).toBe("acbca85")
    })

describe('criteria', () => {
  describe('mutations', () => {
    it('should preloaded responses', () => {
      const storeState = state();
      const criteria = mockCriteria();

      mutations.populateCriterion(storeState, { hash: criteria[0].criteriaKeyHash, criterion: criteria[0], storedData:{} });
      mutations.populateCriterion(storeState, { hash: criteria[1].criteriaKeyHash, criterion: criteria[1], storedData:{}});
      mutations.preloadedResponses(storeState, {
        valueArray: [
          { response: true, criteriaKeyHash: criteria[0].criteriaKeyHash},
          { response: 'spouse', criteriaKeyHash: criteria[1].criteriaKeyHash}
        ]
      });
      expect(storeState.eligibilityCriteria[criteria[0].criteriaKey].response).toBe(true);
      expect(storeState.eligibilityCriteria[criteria[1].criteriaKey].response).toBe('spouse');
    });
    it('should responses not preloaded are null', () => {
      const storeState = state();
      const criteria = mockCriteria();

      mutations.populateCriterion(storeState, { hash: criteria[0].criteriaKeyHash, criterion: criteria[0], storedData:{} });
      mutations.populateCriterion(storeState, { hash: criteria[1].criteriaKeyHash, criterion: criteria[1], storedData:{}});
      mutations.preloadedResponses(storeState, {
        valueArray: [
          { response: true, criteriaKeyHash: criteria[0].criteriaKeyHash}
        ]
      });
      expect(storeState.eligibilityCriteria[criteria[0].criteriaKey].response).toBe(true);
      expect(storeState.eligibilityCriteria[criteria[1].criteriaKey].response).toBe(null);
    });

    it('should populate criterion', () => {
      const storeState = state();
      const criterionn = mockCriteria()[0];
      mutations.populateCriterion(storeState, {
        hash: criterionn.criteriaKeyHash,
        criterion: criterionn,
        storedData:{} }
      );

      expect(storeState.eligibilityCriteria[criterionn.criteriaKey]).toBeDefined();
      expect(storeState.hashToCriteria[criterionn.criteriaKeyHash]).toBeDefined();
    });
    it('should clear all responses', () => {
      const storeState = state();
      const criteria = mockCriteria();

      mutations.populateCriterion(storeState, { hash: criteria[0].criteriaKeyHash, criterion: criteria[0], storedData:{} });
      mutations.populateCriterion(storeState, { hash: criteria[1].criteriaKeyHash, criterion: criteria[1], storedData:{}});

      expect(storeState.eligibilityCriteria[criteria[0].criteriaKey].response).toBe(null);
      expect(storeState.eligibilityCriteria[criteria[1].criteriaKey].response).toBe(null);

      storeState.eligibilityCriteria[criteria[0].criteriaKey].response = true;
      storeState.eligibilityCriteria[criteria[1].criteriaKey].response = true;

      mutations.clearSelectedCriteria(storeState, {});

      expect(storeState.eligibilityCriteria[criteria[0].criteriaKey].response).toBe(null);
      expect(storeState.eligibilityCriteria[criteria[1].criteriaKey].response).toBe(null);
      expect(localStorage.getItem("responseData")).toBe("{}");

    });
  });
  describe('actions', () => {
    beforeEach(() => {
      process.client = true;
      const { Crypto } = require("@peculiar/webcrypto");
      window.crypto = new Crypto();
      localStorage.removeItem("responseData")

      const { TextEncoder } = require('util');
      global.TextEncoder = TextEncoder;

    });
    afterEach(() => {
      process.client = false;
      localStorage.removeItem("responseData")
    });

    it('should populate eligibility criteria', async () => {
      state();

      const commit = jest.fn();
      await actions.populate({ commit, state }, mockCriteria());
      expect(commit.mock.calls.length).toBe(2);
      expect(commit.mock.calls[0][0]).toBe('populateCriterion');
      expect(commit.mock.calls[0][1].hash).toBe('acbca85');
      expect(commit.mock.calls[0][1].storedData).toStrictEqual({});
    });

    it('calls populateCriterion with stored data', async () => {
      state();
      const commit = jest.fn();
      const localStorageData = '{"acbca89":true}';
      localStorage.setItem("responseData", localStorageData)

      await actions.populate({ commit, state }, mockCriteria());

      expect(commit.mock.calls.length).toBe(2);
      expect(commit.mock.calls[0][0]).toBe('populateCriterion');
      expect(commit.mock.calls[0][1].hash).toBe('acbca85');
      expect(commit.mock.calls[0][1].storedData).toStrictEqual(JSON.parse(localStorageData));
    });

    it('should call clear commit', async () => {
      state();
      const commit = jest.fn();
      await actions.clear({ commit, state }, mockCriteria());
      expect(commit.mock.calls.length).toBe(1);
      expect(commit.mock.calls[0][0]).toBe('clearSelectedCriteria');
    });
  });
  describe('getters', () => {
    it('should return an error when criteriaKey doesn\'t exist', () => {
      const storeState = state();
      const ret = getters.getCriterionByEligibilityKey(storeState)('bad_key');
      expect(ret.key).toMatch(/error-missing-key--/)
    });
    describe('getTotalEligibleCriteria', () => {
      it('should return 0 when there are no criteria', () => {
        const storeState = state();
        const ret = getters.getTotalEligibleCriteria(storeState, getters)();
        expect(ret).toBe(0);
      });
    });
    describe('getTotalIneligibleCriteria', () => {
      it('should return 0 when there are no criteria', () => {
        const storeState = state();
        const ret = getters.getTotalIneligibleCriteria(storeState, getters)();
        expect(ret).toBe(0);
      });
    });

    describe('populate with storedData', () => {
      it('should set value from stored data', () => {

        const storeState = state();
        const criteria = mockCriteria();

        const hashedCriteria = {
          'acbca85':"died as a result of a service-connected disability"
        };
        mutations.populateCriterion(storeState, { hash: criteria[0].criteriaKeyHash, criterion: criteria[0], storedData:hashedCriteria });
        expect(storeState.eligibilityCriteria[criteria[0].criteriaKey]).toBeDefined();
        expect(storeState.eligibilityCriteria[criteria[0].criteriaKey].response).toBe("died as a result of a service-connected disability");
      });

      it('should default to null if no stored data exists', () => {

        const storeState = state();
        const criteria = mockCriteria();

        const hashedCriteria = {
          'someOtherKey':"not real value"
        };
        mutations.populateCriterion(storeState, { hash: criteria[0].criteriaKeyHash, criterion: criteria[0], storedData:hashedCriteria });
        expect(storeState.eligibilityCriteria[criteria[0].criteriaKey]).toBeDefined();
        expect(storeState.eligibilityCriteria[criteria[0].criteriaKey].response).toBe(null);
      });
    });

  });
});
