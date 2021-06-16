import { shallowMount } from "@vue/test-utils";
import beforeAllTests from '@/test/beforeAllTests';
import { createContentMock } from '@/test/mockContent';
import BenefitsBrowser from '~/pages/_slug/benefits.vue';

const THIS_LIFE_EVENT_SLUG = 'this-life-event';
const LIFE_EVENTS_DIRECTORY = 'life-events';

const mockContent = {
  lifeEvent: {
    slug: THIS_LIFE_EVENT_SLUG,
    title: 'test life event title',
    summary: 'test life event summary',
    lede: 'test life event lede',
    secondaryHeadline: 'test life event secondary headline'
  },
}

describe('BenefitsBrowser', () => {

  beforeAll(async () => {
    await beforeAllTests();
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(BenefitsBrowser);
    expect(wrapper.vm).toBeTruthy();
  });

  it('asyncData() fetches the given data', async () => {
    const $content = createContentMock(
      [
        {
          collectionName: LIFE_EVENTS_DIRECTORY,
          items: [{ ...mockContent.lifeEvent }]
        }
      ]
    );
    const asyncItems = await BenefitsBrowser.asyncData({ $content, params: { slug: THIS_LIFE_EVENT_SLUG } });

    // console.log(asyncItems);

    expect(asyncItems.lifeEvent).toHaveLength(1);
    expect($content).toHaveBeenCalledWith(LIFE_EVENTS_DIRECTORY, THIS_LIFE_EVENT_SLUG);
  });

  it('displays the computed questionnaire page title', async () => {
    const wrapper = shallowMount(BenefitsBrowser);
    await wrapper.setData(mockContent);

    expect(wrapper.find('h1').text()).toBe('This Life Event Eligibility Estimator');
    expect(wrapper.vm.lifeEventTitle).toBe('This Life Event');

  });

});
