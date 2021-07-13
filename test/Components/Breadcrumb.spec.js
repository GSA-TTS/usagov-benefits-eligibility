import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import Breadcrumb from '@/components/Breadcrumb.vue'
import VueRouter from 'vue-router'
import beforeAllTests from '@/test/beforeAllTests';

describe('Breadcrumb', () => {
  beforeAll(async () => {
    await beforeAllTests();
  });

  const testRoutes = [
    { path: '/' },
    { path: '/foo' },
    { path: '/foo/bar' },
    { path: '/foo/bar/baz' }
  ];

  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter({
    routes: testRoutes
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Breadcrumb, {
      router,
      localVue,
      global: {
        plugins: [router]
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test('builds crumbs from router path', async () => {
    const wrapper = mount(Breadcrumb, {
      router,
      localVue,
      global: {
        plugins: [router]
      }
    });
    router.push('/foo/bar/baz')
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.crumbs[0].path).toBe('/foo');
    expect(wrapper.vm.crumbs[1].path).toBe('/foo/bar');
    expect(wrapper.vm.crumbs[2].path).toBe('/foo/bar/baz');

  });
});
