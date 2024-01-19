<template>
  <section id="careers-section">
    <div class="row">
        <div class="container">
            <div class="careers-wrapper center">
                <h2 class="section-title">Explore Novus Agro Careers</h2>
                <p class="section-desc-txt">
                    At Novus Agro, we appreciate and cherish the diversity of every one of our team members. We
                    all work in our unique ways all to achieve a common goal and always get the job done! We also
                    have field agents across the 36 states in Nigeria, with over 40,000 network of farmers. We
                    offer opportunities for internship across various departments for people of almost every
                    skill set. From operations to business development to IT and more, it takes a lot of teamwork
                    from these different departments to do what we do. Every single one matters here at Novus
                    Agro Limited.
                </p>
                <p class="section-desc-txt mt-[20px]">
                    To apply for our internship program, send a mail to
                    <a href="mailto:info@novusagro.com" class="pry-color underline"><b>info@novusagro.com</b></a>
                </p>
            </div>

            <img src="@/assets/images/careers-img.jpg" alt="careers-img" class="careers-img" data-aos="fade-up">
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'CareersSection',
}
</script>

<style>
section#careers-section {
    padding: 80px 0 70px;
    position: relative;
}
img.careers-img {
    width: 80%;
    margin: 60px auto 0;
    border-radius: 50px;
}
section#careers-section .section-desc-txt {
    font-size: 20px;
}

@media (max-width: 992px) {
    img.careers-img {
        width: 100%;
    }
    section#careers-section .section-desc-txt {
        font-size: 18px;
    }
}
</style>