import { shallowMount } from "@vue/test-utils";
import LifeEventsPage from '@/pages/index.vue'
import beforeAllTests from '@/test/beforeAllTests';
import { createContentMock } from '@/test/mockContent';

const mockContent = {
  lifeEvents: [
    {
      slug: 'testSlug',
      title: 'testTitle',
      summary: 'test summary',
    }
  ]
};

const LIFE_EVENTS_DIRECTORY = 'life-events';

describe('LifeEventsPage', () => {

  beforeAll(async () => {
    await beforeAllTests();
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(LifeEventsPage);
    expect(wrapper.vm).toBeTruthy();
  });

  it('displays a list of one life event', async () => {
    const wrapper = shallowMount(LifeEventsPage);
    await wrapper.setData(mockContent);
    expect(wrapper.find('.usa-card-group').exists()).toBeTruthy();
    expect(wrapper.findAll('.usa-card').length).toBe(1);

  });

  it('asyncData() fetches the given data', async () => {
    const $content = createContentMock(
      [{
        collectionName: LIFE_EVENTS_DIRECTORY,
        items: mockContent.lifeEvents
      }]
    );
    const asyncItems = await LifeEventsPage.asyncData({ $content });

    expect(mockContent).toMatchObject(asyncItems);
    expect($content).toHaveBeenCalledWith(LIFE_EVENTS_DIRECTORY);
  });
});
