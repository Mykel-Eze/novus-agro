<template>
    <footer id="footer">
        <div class="row">
            <div class="container">
                <div class="footer-grid-wrapper">
                    <div class="footer-block">
                        <div class="footer-block-title">Office Address</div>
                        <ul class="footer-block-list">
                            <li>
                                No 5a Craig Street, <br /> Ogudu GRA, <br /> Lagos, <br /> Nigeria.
                            </li>
                        </ul>
                    </div>
                    <div class="footer-block">
                        <div class="footer-block-title">For Enquiry</div>
                        <ul class="footer-block-list">
                            <li>
                                <a href="mailto:info@novusagro.com" class="footer-link flex-div">
                                    <img src="@/assets/images/mail-icon.svg" alt="mail-icon" class="footer-link-icon" />
                                    <span>info@novusagro.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+2348139466737" class="footer-link flex-div">
                                    <img src="@/assets/images/phone-icon.svg" alt="phone-icon" class="footer-link-icon" />
                                    <span>+234 8139466737</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-block">
                        <div class="footer-block-title">Sign up for the newsletter</div>
                        <form action="#" class="footer-newsletter-form">
                            <div class="input-field flex-div">
                                <input type="email" id="newsletter-inp" />
                                <button id="subscribe-btn">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="footer-copyright-social flex-div justify-content-btw">
                    <div class="footer-copyright">
                        © Copyright {{ currentYear }} - Novus Agro Nigeria Limited
                    </div>
                    <div class="flex-div footer-social">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                            class="footer-link flex-div sec-color">
                            <img src="@/assets/images/twitter.svg" alt="twitter" class="social-link-icon" />
                            <span>Twitter</span>
                        </a>
                        <a href="https://www.instagram.com/novus_agro/" target="_blank" rel="noopener noreferrer"
                            class="footer-link flex-div sec-color">
                            <img src="@/assets/images/instagram.svg" alt="instagram" class="social-link-icon" />
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.linkedin.com/company/novus-agro-limited/" target="_blank" rel="noopener noreferrer"
                            class="footer-link flex-div sec-color">
                            <img src="@/assets/images/linkedin.svg" alt="linkedin" class="social-link-icon" />
                            <span>Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
}
</script>

<style scoped src="@/assets/css/footer.css"></style>