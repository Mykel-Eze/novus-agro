<template>
    <section id="faqs">
        <div class="row">
            <div class="container">
                <div class="faq-collapsible-wrapper">
                    <ul class="collapsible">
                        <li class="active">
                            <div class="collapsible-header flex-div justify-content-btw">
                                <span>What is Lorem Ipsum?</span>
                                <img src="@/assets/images/chevron-down.svg" alt="arrow-down" class="down-arr">
                            </div>
                            <div class="collapsible-body">
                                <div class="faq-txt">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem optio
                                        nostrum eius libero. Placeat, harum doloribus ab vel voluptas dolore? Omnis
                                        vel ad, rem numquam reprehenderit magni corporis quis dolore!
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="collapsible-header flex-div justify-content-btw">
                                <span>Why do we use it?</span>
                                <img src="@/assets/images/chevron-down.svg" alt="arrow-down" class="down-arr">
                            </div>
                            <div class="collapsible-body">
                                <div class="faq-txt">
                                    <p>
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="collapsible-header flex-div justify-content-btw">
                                <span>Where does it come from?</span>
                                <img src="@/assets/images/chevron-down.svg" alt="arrow-down" class="down-arr">
                            </div>
                            <div class="collapsible-body">
                                <div class="faq-txt">
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="collapsible-header flex-div justify-content-btw">
                                <span>Where can I get some?</span>
                                <img src="@/assets/images/chevron-down.svg" alt="arrow-down" class="down-arr">
                            </div>
                            <div class="collapsible-body">
                                <div class="faq-txt">
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="collapsible-header flex-div justify-content-btw">
                                <span>How does it work?</span>
                                <img src="@/assets/images/chevron-down.svg" alt="arrow-down" class="down-arr">
                            </div>
                            <div class="collapsible-body">
                                <div class="faq-txt">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import M from "materialize-css";
export default {
    name: "FaqsSection",
    mounted() {
        const elemsCollapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elemsCollapsible);
    }
}
</script>

<style></style>