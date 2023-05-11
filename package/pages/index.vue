<script setup lang="ts">
import Header from '@/layouts/header/Header.vue';
import HeroBanner from '@/components/custom-components/HeroBanner.vue';
import Services from '@/components/custom-components/Services.vue';
import BuildAmazing from '@/components/custom-components/BuildAmazing.vue';
import BuildFeature from '@/components/custom-components/BuildFeature.vue';
import ChoosePricePlan from '@/components/custom-components/ChooseYourPlan.vue';
import Portfolio from '@/components/custom-components/Portfolio.vue';
import Blog from '@/components/custom-components/BlogSection.vue';
import Team from '@/components/custom-components/Team.vue';
import Testimonials from '@/components/custom-components/Testimonials.vue';
import Contact  from '@/components/custom-components/Contact.vue';
import UpgradetoPro from '@/components/custom-components/UpgradetoPro.vue';
import Footer from '@/layouts/footer/Footer.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <HeroBanner />
        <Services />
        <BuildAmazing />
        <BuildFeature />
        <ChoosePricePlan/>
        <Blog/>
        <Portfolio/>
        <Team/>
        <Testimonials />
        <Contact/>
        <UpgradetoPro/>
    <Footer />
</template>

