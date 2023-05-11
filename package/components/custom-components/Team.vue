<script setup lang="ts">
import { Team } from '@/_mockApis/custom-components/index';
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
                            <h6 class="text-subtitle-1 text-dark font-weight-bold">Team</h6>
                        </div>
                        <h2 class="text-h2 text-dark mb-3" data-aos="fade-left" data-aos-delay="200"
                            data-aos-duration="1000">Experienced & Professional Team</h2>
                            <p class="text-muted mb-4">Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website & dashboard in No-time.</p>
                    </div>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col cols="12" md="3" sm="6" v-for="card in Team" :key="card.title">
                    <v-card elevation="0"  class="team-card  mb-7">
                        <div class="social-overlay overflow-hidden rounded-md">
                            <img :src="card.img" :alt="card.img" class="img-fluid" />
                            <div class="img-overlay">
                                <ul>
                                    <li v-for="social in card.socialicon" :key="social.icon">
                                        <NuxtLink :to="social.url">
                                            <i :class="social.icon"></i>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h5 class="text-h4 font-weight-medium mt-4">
                                {{ card.title }}
                            </h5>
                            <p class="text-subtitle-1 text-muted mb-3">{{ card.subtitle }}</p>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>