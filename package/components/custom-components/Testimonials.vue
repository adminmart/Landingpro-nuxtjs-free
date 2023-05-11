<script setup lang="ts">
import { TestimonialsData } from '@/_mockApis/custom-components/index';
</script>
<template>
    <div class="py-md-15 py-8 bg-lightprimarygray">
        <v-container>
            <v-row class="justify-center">
                <v-col cols="12" sm="8">
                    <div class="text-center">
                        <div class="d-flex align-center mb-5 justify-center" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <span class="bg-success pa-2 rounded-circle mr-2"></span>
                            <h6 class="text-subtitle-1 text-dark font-weight-bold">Testimonials</h6>
                        </div>
                        <h2 class="text-h2 text-dark  mb-5" data-aos="fade-left" data-aos-delay="200"
                            data-aos-duration="1000">Check what our Customers are Saying</h2>
                            <p class="text-muted mb-4">Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website & dashboard in No-time.</p>
                    </div>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col cols="12" md="4" sm="6" v-for="card in TestimonialsData" :key="card.name">
                    <v-card elevation="0">
                        <v-card-text class="pa-sm-8 pa-5">
                            <p class="mb-8 text-subtitle-1">“{{ card.testimonial }}”</p>
                            <div class="d-flex align-center">
                                <v-avatar size="60">
                                    <img :src="card.img" alt="icon" height="60" />
                                </v-avatar>
                                <div class="ml-5">
                                    <h6 class=" font-weight-medium text-dark text-subtitle-1">
                                        {{ card.name }}
                                    </h6>
                                    <div class="ml-n1">
                                        <v-rating v-model="card.rating" hover density="compact" readonly size="small"
                                            color="danger"> </v-rating>
                                    </div>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>