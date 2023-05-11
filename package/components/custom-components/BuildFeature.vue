<script setup lang="ts">
import {BuildFeaturesData} from '@/_mockApis/custom-components/index';
</script>
<template>
    <div class="bg-lightmuted py-md-15 py-8">

            <v-container>
                <v-row class="justify-center">
                    <v-col cols="12" sm="8">
                        <div class="text-center">
                            <div class="d-flex align-center mb-5 justify-center"  data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                <span class="bg-success pa-2 rounded-circle mr-2"></span>
                                <h6 class="text-subtitle-1 text-dark font-weight-bold" >Feature</h6>
                            </div>
                            <h2 class="text-h2 text-dark mb-4" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Awesome with Extra Ordinary Flexibility</h2>
                            <p class="text-muted  mb-4">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</p>

                        </div>
                    </v-col>
                </v-row>
                <v-row class="justify-center">
                    <v-col cols="12" md="4" sm="6" v-for="card in BuildFeaturesData" :key="card.title">
                        <v-card elevation="0" class="text-center py-md-15 py-6 px-md-8 px-4  rounded-md" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <component :is="card.icon" class="text-primary" stroke-width="1.5" size="40" />
                            <h4 class="text-h4 text-dark font-weight-bold my-sm-6 my-4 px-md-6">{{ card.title }}</h4>
                            <p class="text-muted mb-sm-6 mb-4">{{ card.desc }}</p>
                            <NuxtLink to="/"
                                class="text-decoration-none d-flex justify-center align-center text-primary hover-primary">
                                Get Started
                                <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                            </NuxtLink>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
    </div>
</template>