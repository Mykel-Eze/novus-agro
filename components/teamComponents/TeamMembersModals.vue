<template>
    <!--=== Mr Eyitayo Shiyanbola (CEO/MD) ===-->
    <template v-if="teams.length > 0">
        <template v-for="(team,index) in teams" :key="index">
            <div :id="team.name" class="modal team-modal">
                <img :src="getPhoto(team.photo)" alt="close" class="modal-close">
                <div class="modal-content">
                    <div class="member-modal-wrapper">
                        <div class="member-img-side">
                            <img :src="getPhoto(team.photo)" :alt="team.name" class="member-img">
                        </div>

                        <div class="member-txt-side">
                            <div class="container">
                                <div class="member-role">{{team.position}}</div>
                                <div class="member-name"> {{ team.name }}</div>
                                <div class="member-desc">
                                    {{ team.experience }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </template>
    <!-- <div id="emmanuel-saseun" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team/Emmanuel-Saseun.jpg" alt="Emmanuel Saseun" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">CEO</div>
                        <div class="member-name">Emmanuel Saseun</div>
                        <div class="member-desc">
                            <p>
                                Emmanuel Saseun is an experienced financial analyst, agricultural investment and development
                                professional. He has over 10 years’ experience across the banking and agriculture sectors. Prior
                                to him joining Novus Agro Limited, He was Head, Value Addition for Terra Agric Farm Future Limited.
                            </p>
                            <p>
                                Emmanuel worked with GTBank Plc, across several Units from Public Sector, Maritime, Corporate
                                Bank, setting up the Bank’s first Agribusiness Unit.
                            </p>
                            <p>
                                He holds a bachelor’s degree in Agriculture (Agricultural Economics) from the Obafemi Awolowo
                                University and a Master’s Degree in Business Administration, also from Obafemi Awolowo
                                University. Emmanuel is also an alumnus of the prestigious Lagos Business School (LBS).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- <div id="blessing-olalere" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team/Blessing-Olalere.jpg" alt="Blessing Olalere" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">Human Resources</div>
                        <div class="member-name">Blessing Olalere</div>
                        <div class="member-desc">
                            <p>
                                Blessing Olalere is a seasoned Human Resources (HR) professional with over 10 years of
                                experience in various industries. Blessing possesses a comprehensive understanding of HR
                                policies, labour laws, and best practices, which she leverages to effectively support both
                                employees and management. Her proactive approach to talent acquisition, employee
                                development, performance management amongst other HR functions have consistently contributed
                                to the success of the organizations she has worked for. Blessing strives to create
                                workplaces where every individual feels valued and empowered to succeed.
                            </p>
                            <p>
                                She also participates in networking events and professional development seminars to stay
                                updated on industry trends and best practices in HR management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="akongs-dakande" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team/Akongs-Dakande.jpg" alt="Akongs Dakande" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">Grainpoints Operation Manager</div>
                        <div class="member-name">Akongs Dakande</div>
                        <div class="member-desc">
                            <p>
                                B2C & B2B Sales, Business development and Agribusiness professional experience in leveraging
                                consultative selling strategies that drive sustainable revenue and build relationships across
                                target markets. Deep knowledge of market segments, marketing campaigns, development and
                                implementation plans.
                            </p>
                            <p>
                                Deep on hand knowledge of the agribusiness and west African agricultural industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="abimbola-afolabi" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team/Abimbola-Afolabi.jpg" alt="Abimbola Afolabi" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">Business Analysis and Development</div>
                        <div class="member-name">Abimbola Afolabi</div>
                        <div class="member-desc">
                            Abimbola commenced her professional journey at Niger Insurance PLC in 2018, serving as an Insurance
                            Underwriter. In 2020, she transitioned to Novus Agro as a Growth and Development Facilitator, swiftly
                            transitioning into roles encompassing Business Analysis and Development. Presently, she oversees the
                            Farm and Fortune and CFYE Projects, while also providing consultancy services to the company on matters
                            pertaining to Project Risk Management and Insurance.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="pius-onu" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team/Pius-Onu.jpg" alt="Pius Chris Onu" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">CFO</div>
                        <div class="member-name">Pius Chris Onu</div>
                        <div class="member-desc">
                            <p>
                                He a chartered Certified Accountant (ACCA)  and a member of the Chartered Institute of Taxation of Nigeria.
                                He obtained a B.Sc  in Accounting from Lagos State University Nigeria and M.Sc in Accounting and Finance from Robert Gordon University Aberdeen. 
                                He has over 15 years  working experience as  accounting and Finance professional which cut across Oil and Gas, Logistics, manufacturing and agriculture Sectors .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="tope-olajide" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team/Tope-Olajide.jpg" alt="Tope Olajide" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">Opportunities and Business Development</div>
                        <div class="member-name">Temitope Olajide</div>
                        <div class="member-desc">
                            Temitope started her working career as an intern at FrieslandCampina WAMCO. In 2018, she
                            joined Novus Agro Ltd as an intern where she quickly rose to become the head
                            opportunities and Business development  for the Organization. Miss. Temitope holds
                            a bachelor’s degree in Food science and technology from the Obafemi Awolowo
                            University, and is a 2019 Utiva data school alumni.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- <div id="mike-eko" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team/Mike-Eko.jpg" alt="Mike Eko" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">Learning and Org. Improvement</div>
                        <div class="member-name">Mike Eko</div>
                        <div class="member-desc">
                            Mike Holds a Bachelor of Technology (BTech) in Polymer Technology from Federal University of
                            Technology, Owerri, Nigeria. He is versatile having gernered experience from his stints in
                            manufacturing, Quality Assurance, Sales customer Support and IT Consultants. He Currently heads
                            learning and Organizational improvement at Novus Agro Ltd.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import M from "materialize-css";
import nuxtData from "../nuxt.config"

export default {
    name: "TeamMembersModals",
    mounted() {
        const elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    },
    updated() {
        const elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    },
    data() {
        return {
            baseURL: nuxtData.runtimeConfig.public.baseURL,
            webURL: nuxtData.runtimeConfig.public.webURL
        }
    },
    props: {
      teams: {
      type: [Object, Array],
      required: true
    }
    },
    methods: {
        getPhoto (path) {
          return this.webURL + path
        }
    },
}
</script>

<style></style>