<script setup lang="ts">
import { Portfolio } from '@/_mockApis/custom-components/index';
</script>
<template>
    <div class="py-md-15 py-8">
            <v-container>
                <v-row class="justify-center">
                    <v-col cols="12" sm="8">
                        <div class="text-center">
                            <div class="d-flex align-center mb-5 justify-center" data-aos="fade-right" data-aos-delay="200"
                                data-aos-duration="1000">
                                <span class="bg-success pa-2 rounded-circle mr-2"></span>
                                <h6 class="text-subtitle-1 text-dark font-weight-bold">Portfolio</h6>
                            </div>
                            <h2 class="text-h2 text-dark mb-3" data-aos="fade-left" data-aos-delay="200"
                                data-aos-duration="1000">Our Portfolio work with three column</h2>
                                <p class="text-muted mb-4">Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website & dashboard in No-time.</p>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="justify-center">
                    <v-col cols="12" md="4" sm="6" v-for="card in Portfolio" :key="card.title" class="mb-2">
                        <div class="hover-card overflow-hidden lh-10 rounded-md position-relative">
                            <NuxtLink to="/" class="text-decoration-none">
                                <v-img :src="card.img" height="250px" alt="post" cover class="zoom-in w-100">
                                </v-img>
                            </NuxtLink>
                        </div>
                        <div class="mt-4">
                            <h5 class="text-h5 font-weight-bold text-13">
                                <NuxtLink class="text-decoration-none text-dark hover-primary" to="/">{{ card.title}}</NuxtLink>
                            </h5>
                            <p class="text-muted text-h6 font-weight-regular">{{ card.desc}}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
</div></template>