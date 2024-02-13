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
export default {
    name: 'TeamPage',
}
</script>
