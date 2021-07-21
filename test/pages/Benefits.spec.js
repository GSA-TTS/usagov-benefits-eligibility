import { shallowMount } from "@vue/test-utils";
import beforeAllTests from '@/test/beforeAllTests';
import { createContentMock } from '@/test/mockContent';
import Vuex from 'vuex';
import BenefitsBrowser from '~/pages/_slug/benefits.vue';
import { state as criteriaState, mutations, getters, actions } from '~/store/criteria';

const THIS_LIFE_EVENT_SLUG = 'this-life-event';
const LIFE_EVENTS_DIRECTORY = 'life-events';
const CRITERIA_DIRECTORY = 'criteria';
const BENEFITS_DIRECTORY = 'benefits';

const mockContent = {
  lifeEvent: {
    slug: THIS_LIFE_EVENT_SLUG,
    title: 'test life event title',
    summary: 'test life event summary',
    lede: 'test life event lede',
    secondaryHeadline: 'test life event secondary headline',
    eligibilityCriteria: [
      {
        label: "first group label",
        description: "first group description",
        criteriaGroupKey: 'group1',
        criteriaKeys: ['criteriaKey1', 'criteriaKey2']
      }
    ]
  },
  benefit: {
    slug: THIS_LIFE_EVENT_SLUG,
    agency: "Benefit Agency",
    headline: "Benefit One",
    identifier: "benefitOne",
    lifeEvents: ["bereavement", THIS_LIFE_EVENT_SLUG],
    provider: "Federal Government",
    source: { name: "Dept. of Benefit One", link: "#" },
    summary: "Benefit one summary.",
    tags: ["burial honors"],
    title: "Benefit One Title",
    toc: [],
  },
  criteria: {
    body: [
      {
        criteriaKey: "criteriaKey1",
        label: "Benefit criteria label 1.",
        type: "boolean",
        values: [true]
      },
      {
        criteriaKey: "criteriaKey2",
        label: "Benefit criteria label 2.",
        type: "boolean",
        values: [true]
      }
    ]
  },
}

const vueMocks = (mocks) => {
  return Object.assign({}, {
    $fetchState: {
      pending: false,
      error: false,
    },
    $route: {
      path: `/${THIS_LIFE_EVENT_SLUG}`,
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
    criteriaState.namespaced = true;
    store = new Vuex.Store({
      modules: {
        criteria: {
          namespaced: true,
          state: criteriaState,
          actions,
          mutations,
          getters
        },
      },
    });
  })

  it('is a Vue instance', () => {
    const wrapper = shallowMount(BenefitsBrowser, {
      mocks: vueMocks(),
      store
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('displays the page content', async () => {
    const $content = createContentMock(
      [
        {
          collectionName: LIFE_EVENTS_DIRECTORY,
          items: [{ ...mockContent.lifeEvent }]
        },
        {
          collectionName: BENEFITS_DIRECTORY,
          items: [{ ...mockContent.benefit }],
        },
        {
          collectionName: CRITERIA_DIRECTORY,
          items: [{ ...mockContent.criteria }]
        }
      ]
    );
    const wrapper = shallowMount(BenefitsBrowser, {
      mocks: vueMocks({ $content }),
      store
    });

    await wrapper.vm.$options.fetch.apply(wrapper.vm);
    wrapper.vm.lifeEvent = mockContent.lifeEvent;
    await store.dispatch("criteria/populate", [...mockContent.criteria.body]);
    await wrapper.vm.$nextTick();
    expect(wrapper.find('h1').text()).toBe('test life event secondary headline');
    expect(wrapper.vm.lifeEventTitle).toBe('test life event secondary headline');
  });

  it('should display an alert when the results are copied', async () => {
    jest.useFakeTimers();
    const $content = createContentMock(
      [
        {
          collectionName: LIFE_EVENTS_DIRECTORY,
          items: [{ ...mockContent.lifeEvent }]
        },
        {
          collectionName: BENEFITS_DIRECTORY,
          items: [{ ...mockContent.benefit }],
        },
        {
          collectionName: CRITERIA_DIRECTORY,
          items: [{ ...mockContent.criteria }]
        }
      ]
    );
    const wrapper = shallowMount(BenefitsBrowser, {
      mocks: vueMocks({ $content }),
      store
    });

    await wrapper.vm.$options.fetch.apply(wrapper.vm);
    wrapper.vm.lifeEvent = mockContent.lifeEvent;
    await store.dispatch("criteria/populate", [...mockContent.criteria.body]);
    await wrapper.vm.$nextTick();
    wrapper.vm.doCopiedAlert();
    await wrapper.vm.$nextTick();
    expect(wrapper.find('alert-stub').attributes('style')).toBe('');
    jest.runAllTimers();
    await wrapper.vm.$nextTick();
    expect(wrapper.find('alert-stub').attributes('style')).toMatch(/display.*none/);
  });

  it('should sort the results', async () => {
    const $content = createContentMock(
      [
        {
          collectionName: LIFE_EVENTS_DIRECTORY,
          items: [{ ...mockContent.lifeEvent }]
        },
        {
          collectionName: BENEFITS_DIRECTORY,
          items: [{ ...mockContent.benefit }],
        },
        {
          collectionName: CRITERIA_DIRECTORY,
          items: [{ ...mockContent.criteria }]
        }
      ]
    );
    const wrapper = shallowMount(BenefitsBrowser, {
      mocks: vueMocks({ $content }),
      store
    });
    wrapper.vm.lifeEventBenefits = [
      {
        title: 'two',
        eligibility: [{}, {}, {}],
      },
      {
        title: 'one',
        eligibility: [{}, {}, {}],
      },
      {
        title: 'three',
        eligibility: [{}, {}, {}],
      },
    ];
    jest.spyOn(wrapper.vm, 'getTotalEligibleCriteria').mockReturnValueOnce(3).mockReturnValueOnce(1).mockReturnValueOnce(2);
    await wrapper.find('#benefitSort').findAll('option').at(1).setSelected();
    expect(wrapper.vm.lifeEventBenefits.map(b => b.title).join()).toBe('one,three,two');
    await wrapper.find('#benefitSort').findAll('option').at(0).setSelected();
    expect(wrapper.vm.getTotalEligibleCriteria).toHaveBeenCalled();
    expect(wrapper.vm.lifeEventBenefits.map(b => b.title).join()).toBe('two,three,one')
  });
});
