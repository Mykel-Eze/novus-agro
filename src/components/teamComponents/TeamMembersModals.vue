<template>
    <!--=== Mr Eyitayo Shiyanbola (CEO/MD) ===-->
    <div id="team-member-1" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team-member-1.jpg" alt="team-img" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">CEO/MD</div>
                        <div class="member-name">Chike Nwagwu</div>
                        <div class="member-desc">
                            <p>
                                Chike started his working career as a business development executive with
                                Millennium Investment Trust Limited where he quickly rose to become the
                                Business Advisory Lead. In 2000 he left to start icaptechnologies Limited, a
                                Technology solutions development firm with market leadership in the provision
                                of transactional platforms mainly in the media and banking industry in Nigeria. He
                                as at various times consulted and led implementation on technology-based process
                                transformation for various organizations in Nigeria including United Bank for
                                Africa and the Code of Conduct Bureau. He joined Esoko Nigeria (A franchise of
                                the Agricultural MIS Esoko) in 2009 as founding Country Director and later became
                                CEO of Novus Agro Limited in 2013.
                            </p>
                            <p>
                                Chike has over 17 years' experience as Technology solutions provider to multiple
                                business sectors in Nigeria. Mr. Nwagwu holds a bachelor’s degree in Geology
                                from the University of Port Harcourt, and is a 2018 Stanford SEED alumni.
                            </p>
                        </div>
                        <!-- <a href="http://linkedin.com" class="member-linkedin-wrapper flex-div gap-2" target="_blank"
                            rel="noopener noreferrer">
                            <img src="@/assets/images/linkedin-black.svg" alt="linkedin" class="linkedin-icon">
                            <span>LinkedIn</span>
                        </a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="team-member-2" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team-member-2.jpg" alt="team-img" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">Risk and Insurance</div>
                        <div class="member-name">Abimbola Afolabi</div>
                        <div class="member-desc">
                            <p>
                                Abimbola started her working career in Niger Insurance PLC where she worked
                                as an Insurance underwriter in 2018. In 2020, she joined Novus Agro as a
                                Growth and Development facilitator and very quickly got into Business Analysis
                                and Development. She currently manages the Farm and Fortune Project and also
                                consults for the company on Project Risk Management and Insurance related issues.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="team-member-3" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team-member-4.jpg" alt="team-img" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">Opportunities and Business Development</div>
                        <div class="member-name">Olajide Temitope</div>
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
    </div>

    <div id="team-member-4" class="modal team-modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <div class="member-modal-wrapper">
                <div class="member-img-side">
                    <img src="@/assets/images/team-member-4.jpg" alt="team-img" class="member-img">
                </div>

                <div class="member-txt-side">
                    <div class="container">
                        <div class="member-role">Learning and Org. improvement</div>
                        <div class="member-name">Mike Eko</div>
                        <div class="member-desc">
                            Mike Holds a Bachelor of Technology (BTech) in Polymer Technology from Federal
                            University of Technology, Owerri, Nigeria. He is versatile having gernered
                            experience from his stints in manufacturing, Quality Assurance , Sales customer
                            Support and IT Consultants. He Currently heads learning and Organizational
                            improvement at Novus Agro Ltd.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import M from "materialize-css";

export default {
    name: "TeamMembersModals",
    mounted() {
        const elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    }
}
</script>

<style></style>