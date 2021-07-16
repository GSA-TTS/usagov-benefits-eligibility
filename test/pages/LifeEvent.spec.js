import { shallowMount } from "@vue/test-utils";
import LifeEventPage from '@/pages/_slug/index.vue'
import beforeAllTests from '@/test/beforeAllTests';
import { createContentMock } from '@/test/mockContent';

const THIS_LIFE_EVENT_SLUG = 'this-life-event';
const LIFE_EVENTS_DIRECTORY = 'life-events';
const BENEFITS_DIRECTORY = 'benefits';

const mockContent = {
  lifeEvent: {
    slug: THIS_LIFE_EVENT_SLUG,
    title: 'test life event title',
    summary: 'test life event summary',
    lede: 'test life event lede',
    secondaryHeadline: 'test life event secondary headline'
  },
  lifeEventBenefits: [
    {
      title: 'test benefit title',
      summary: 'test benefit summary',
      link: '#test-benefit-link',
      tags: ['test-tag'],
      lifeEvents: [THIS_LIFE_EVENT_SLUG],
      source: {
        name: 'test source name',
        link: '#test-source-link'
      }
    },
    {
      title: 'test benefit title 2',
      summary: 'test benefit summary 2',
      link: '#test-benefit-link-2',
      tags: ['test-tag-2'],
      lifeEvents: ['not-this-life-event'],
      source: {
        name: 'test source name',
        link: '#test-source-link'
      }
    }
  ]
};

describe('LifeEventPage', () => {

  beforeAll(async () => {
    await beforeAllTests();
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(LifeEventPage);
    expect(wrapper.vm).toBeTruthy();
  });

  it('displays benefits in cards', async () => {
    const wrapper = shallowMount(LifeEventPage);
    await wrapper.setData(mockContent);
    expect(wrapper.find('.usa-card-group').exists()).toBeTruthy();
    expect(wrapper.findAll('.usa-card').length).toBe(mockContent.lifeEventBenefits.length);

  });

  it('asyncData() fetches the given data', async () => {
    const $content = createContentMock(
      [
        {
          collectionName: BENEFITS_DIRECTORY,
          items: mockContent.lifeEventBenefits
        },
        {
          collectionName: LIFE_EVENTS_DIRECTORY,
          items: [{ ...mockContent.lifeEvent }]
        }
      ]
    );
    const asyncItems = await LifeEventPage.asyncData({ $content, params: { slug: THIS_LIFE_EVENT_SLUG } });
    expect(asyncItems.lifeEventBenefits).toHaveLength(1);
    expect($content).toHaveBeenCalledWith(LIFE_EVENTS_DIRECTORY, THIS_LIFE_EVENT_SLUG);
    expect($content).toHaveBeenCalledWith(BENEFITS_DIRECTORY);
  });
});
