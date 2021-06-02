import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import beforeAllTests from '@/test/beforeAllTests';

describe('Card', () => {
  beforeAll(async () => {
    await beforeAllTests();
  });

  test('is a Vue instance', () => {
    const wrapper = mount(Card, {
      propsData: {
        cardTitle: 'Test card title',
        cardBody: 'Test card body',
        primaryButtonText: 'Test card primary button text',
        primaryButtonLink: '#test-card-primary-button-link',
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
  test('adds secondary buttons if both text and link are provided', () => {
    const wrapper = mount(Card, {
      propsData: {
        cardTitle: 'Test card title',
        cardBody: 'Test card body',
        primaryButtonText: 'Test card primary button text',
        primaryButtonLink: '#test-card-primary-button-link',
        secondaryButtonText: 'Test card secondary button text',
        secondaryButtonLink: '#test-card-secondary-button-link',
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
  test('adds tags if provided', () => {
    const wrapper = mount(Card, {
      propsData: {
        cardTitle: 'Test card title',
        cardBody: 'Test card body',
        primaryButtonText: 'Test card primary button text',
        primaryButtonLink: '#test-card-primary-button-link',
        cardTags: ['test-card-tag-1']
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
  test('uses a given heading level for the card title element', () => {
    const wrapper = mount(Card, {
      propsData: {
        cardTitle: 'Test card title',
        cardTitleHeadingLevel: 'h4',
        cardBody: 'Test card body',
        primaryButtonText: 'Test card primary button text',
        primaryButtonLink: '#test-card-primary-button-link',
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
