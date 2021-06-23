import { shallowMount } from "@vue/test-utils";
import beforeAllTests from '@/test/beforeAllTests';
import { createContentMock } from '@/test/mockContent';
import BenefitsBrowser from '~/pages/_slug/benefits.vue';
import { state as questionGraphState, mutations } from '~/store/questionGraph';
import Vuex from 'vuex';


const THIS_LIFE_EVENT_SLUG = 'this-life-event';
const LIFE_EVENTS_DIRECTORY = 'life-events';
const QUESTIONS_DIRECTORY = 'questions';
const BENEFITS_DIRECTORY = 'benefits';
const QUESTION_GRAPHS_DIRECTORY = 'question-graphs'

const mockContent = {
  lifeEvent: {
    slug: THIS_LIFE_EVENT_SLUG,
    title: 'test life event title',
    summary: 'test life event summary',
    lede: 'test life event lede',
    secondaryHeadline: 'test life event secondary headline'
  },
  questions: [
    {
      slug: THIS_LIFE_EVENT_SLUG,
      choices: "",
      identifier: "work",
      question: "Did you work?",
      type: "yes/no",
    },
    {
      slug: THIS_LIFE_EVENT_SLUG,
      choices: "",
      identifier: "relationship",
      question: "Is there a relationship?",
      type: "yes/no",
    },
    {
      slug: THIS_LIFE_EVENT_SLUG,
      choices: "",
      identifier: "food",
      question: "Food?",
      type: "yes/no",
    },
  ],
  benefit: {
    slug: THIS_LIFE_EVENT_SLUG,
    agency: "Benefit Agency",
    headline: "Benefit One",
    identifier: "benefitOne",
    lifeEvents: ["bereavement", THIS_LIFE_EVENT_SLUG],
    provider: "Federal Government",
    source: {name: "Dept. of Benefit One", link: "#"},
    summary: "Benefit one summary.",
    tags: ["burial honors"],
    title: "Benefit One Title",
    toc: [],
  },
  'question-graphs': {
    slug: THIS_LIFE_EVENT_SLUG,
    body: [
      {from: 'work', to: 'relationship_work', when: 'work'},
      {from: 'relationship_work', to: 'food_relationship_work', when: 'relationship' },
      {from: 'food_relationship_work', to: 'benefitOne', when: 'food' },
    ],
  },
}

const vueMocks = (mocks) => {
  return Object.assign({}, {
    '$fetchState': {
      pending: false,
      error: false,
    },
    '$route': {
      path: '/asdf',
      params: {
        slug: THIS_LIFE_EVENT_SLUG,
      },
    },
  }, mocks);
};

describe('BenefitsBrowser', () => {
  let store;

  beforeAll(async () => {
    await beforeAllTests();
  });

  beforeEach(() => {
    questionGraphState.namespaced = true;
    store = new Vuex.Store({
      modules: {
        questionGraph: {
          namespaced: true,
          state: questionGraphState,
          mutations,
        },
      },
    });
  })

  it('is a Vue instance', () => {
    const wrapper = shallowMount(BenefitsBrowser, {
      mocks: vueMocks(),
      store,
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('displays the computed questionnaire', async () => {
    const $content = createContentMock(
      [
        {
          collectionName: LIFE_EVENTS_DIRECTORY,
          items: [{ ...mockContent.lifeEvent }],
        },
        {
          collectionName: QUESTIONS_DIRECTORY,
          items: mockContent.questions.slice(),
        },
        {
          collectionName: BENEFITS_DIRECTORY,
          items: [{ ...mockContent.benefit }],
        },
        {
          collectionName: QUESTION_GRAPHS_DIRECTORY,
          items: [{ ...mockContent['question-graphs'] }],
        },
      ]
    );

    const wrapper = shallowMount(BenefitsBrowser, {
      mocks: vueMocks({ $content }),
      data: () => mockContent,
      store,
    });
    await wrapper.vm.$options.fetch.apply(wrapper.vm);

    store.commit('questionGraph/addAnswer', {
      questionId: 'work',
      answer: true,
    });
    store.commit('questionGraph/addAnswer', {
      questionId: 'relationship',
      answer: true,
    });
    store.commit('questionGraph/addAnswer', {
      questionId: 'food',
      answer: true,
    });

    expect(wrapper.find('h1').text()).toBe('This Life Event Benefits');
    expect(wrapper.vm.lifeEventTitle).toBe('This Life Event');
    expect(wrapper.find('.benefits-container > * > card-stub').html()).toMatch('Benefit One Title');
  });

});
