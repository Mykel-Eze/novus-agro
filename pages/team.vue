<template>
  <div id="team-page">
    <!---=== Header Section ===--->
    <TopHeader
      title="Our Team"
      description="Our team is made up of individuals with a wealth of experience and first-class expertise in their various fields"
      backgroundImg="team-banner.jpg"
    />
    <!---=== end of Header Section ===--->

    <!---=== Team-Members Section ===--->
    <TeamMembersSection :teams="teams" />
    <!---=== end of Team-Members Section ===--->

    <!---=== Team-Member Modal ===--->
    <TeamMembersModals :teams="teams" />
    <!---=== end of Team-Member Modal ===--->
  </div>
</template>

<script>
import nuxtData from "../nuxt.config"

export default {
    name: 'TeamPage',
    data() {
      return {
        errors: {},
        teams: {},
        baseURL: nuxtData.runtimeConfig.public.baseURL,
        webURL: nuxtData.runtimeConfig.public.webURL
      }
    },
    methods: {
      async getTeamMember () {
        await $fetch(`${this.baseURL}people-management`)
        .then((response) => {
            this.teams = response.response.data
        }).catch((error) => {
            this.errors = error
        })
    },
    },
    mounted() {
      this.getTeamMember();
    },
}
</script>
