<script setup lang="ts">

const link = [
  {
    index: 0,
    name: '',
    url: 'https://github.com/lnbiuc',
    icon: 'i-ri:github-line',
  },
  {
    index: 1,
    name: '',
    url: 'https://x.com/ZZSLL_53387',
    icon: 'i-ri:twitter-x-line',
  },
  {
    index: 2,
    name: '',
    url: 'https://space.bilibili.com/1258497845',
    icon: 'i-ri:bilibili-line',
  },
  {
    index: 3,
    name: '',
    url: 'mailto:hi@lnbiuc.com',
    icon: 'i-ri:mail-line',
  },
]

const colorMode = useColorMode()

const umami = ref({
  active: 1,
  pv: 0,
  uv: 0,
  recent: {
    name: '',
    icon: ''
  }
})

onMounted(async () => {
  await useFetch('/api/umami/active').then((res) => {
    if (res.data.value) {
      umami.value.active = res.data.value
    } else {
      umami.value.active = 1
    }
  })

  await useFetch('/api/umami/stats').then((res) => {
    umami.value.pv = res.data.value.pageviews.value
    umami.value.uv = res.data.value.uniques.value
  })

  await useFetch('/api/umami/metrics').then((res) => {
    umami.value.recent.name = res.data.value.name
    umami.value.recent.icon = res.data.value.emoji
  })
})
</script>

<template>
  <div text="xs gray4"
    class="p-4 mt-20 flex w-full flex-col justify-center items-center backdrop-blur-md border-t border-t-gray-300 dark:border-t-gray-700">
    <div
      class="mt-6 flex justify-between items-center lg:w-[80%] md:w-full sm:w-full xl:max-w-[1000px] xl:w-[80%] w-full flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
      <div>
        <span>Total PV:</span>
        <span text="violet">{{ umami.pv }}</span>
        <span class="mx-1">|</span>
        <span>UV:</span>
        <span text="violet">{{ umami.uv }}</span>
      </div>

      <div class="flex justify-center items-center flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
        <div class="flex flex-row m-2">
          <div class="i-ri:checkbox-blank-circle-fill mr-1 scale-80" text="green"></div>
          <span>Current Online:</span>
          <span text="violet">{{ umami.active }}</span>
        </div>
        <div>
          <span>Recent visitors from:</span>
          <span class="mx-1">{{ umami.recent.icon }}</span>
          <span text="violet">{{ umami.recent.name }}</span>
        </div>
      </div>
    </div>
    <div
      class="py-5  flex min-h-[120px] w-full overflow-hidden xl:m-2 lg:w-[80%] md:w-full sm:w-full xl:max-w-[1000px] xl:w-[80%] justify-center flex-col items-center sm:justify-between sm:flex-row sm:items-start xl:justify-between xl:flex-row xl:items-start lg:justify-between lg:flex-row lg:items-start">
      <div class="flex flex-col items-start">
        <div>
          <span>Copyright © 2024</span>
          <span class="mx-1">|</span>
          <a href="https://beian.miit.gov.cn/" target="_blank">陕ICP备2021015553号-1</a>
        </div>
        <div class="mt-10">
          <ul class="flex flex-row">
            <li>
              <router-link to="/" class="mr-2 hover:text-violet">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/blog" class="mr-2 hover:text-violet">
                Blog
              </router-link>
            </li>
            <li>
              <router-link to="/shorts" class="mr-2 hover:text-violet">
                Short
              </router-link>
            </li>
            <!-- <li>
              <router-link to="/project" class="mr-2 hover:text-violet">
                Project
              </router-link>
            </li> -->
            <li>
              <router-link to="/friend" class="mr-2 hover:text-violet">
                Friend
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-violet">
                About
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-end mt-10 sm:mt-unset md:mt-unset xl:mt-unset lg:mt-unset">
        <div class="flex flex-row">
          <a v-for="l in link" :key="l.index" class="my-open-tab mr-3 flex flex-row justify-center items-center"
            :href="l.url" target="_blank" aria-label="icon">
            <UIcon :name="l.icon" class="text-xl" />
            <span class="ml-1">
              {{ l.name }}
            </span>
          </a>
        </div>
        <div class="mt-6">
          <a v-if="colorMode.value === 'dark'" href="https://zeabur.com?referralCode=lnbiuc&utm_source=lnbiuc"><img
              src=https://zeabur.com/deployed-on-zeabur-dark.svg alt="Deployed on Zeabur" /></a>
          <a v-else class="shadow" href="https://zeabur.com?referralCode=lnbiuc&utm_source=lnbiuc"><img
              src=https://zeabur.com/deployed-on-zeabur-light.svg alt="Deployed on Zeabur" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
