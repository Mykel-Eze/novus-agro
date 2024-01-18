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
    <TeamMembersSection />
    <!---=== end of Team-Members Section ===--->

    <!---=== Team-Member Modal ===--->
    <TeamMembersModals />
    <!---=== end of Team-Member Modal ===--->
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import TeamMembersSection from '@/components/teamComponents/TeamMembersSection.vue'
import TeamMembersModals from '@/components/teamComponents/TeamMembersModals.vue'

export default {
    name: 'TeamPage',
    components: {
        TopHeader,
        TeamMembersSection,
        TeamMembersModals,
    },
}
</script>

<style src="@/assets/css/team.css"></style>