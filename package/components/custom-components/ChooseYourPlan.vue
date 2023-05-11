<script setup lang="ts">
import { ref } from 'vue';
import { pricing } from '@/_mockApis/custom-components/index';
/* Switch monthly/yearly pricing */
const text = ref('monthly')
const priceplan = ref(false);
const priceplanyearly = ref(false);
</script>
<template>
    <div class="choose-plan position-relative">
        <div class="py-md-12 py-5 ">
            <v-container>
                <v-row class="justify-center text-center">
                    <v-col cols="12" md="7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <div class="d-flex align-center mb-5 justify-center"  data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                <span class="bg-success pa-2 rounded-circle mr-2"></span>
                                <h6 class="text-subtitle-1 text-dark font-weight-bold" >Pricin Plan</h6>
                            </div>
                        <h2 class="text-h2 text-dark mb-5">Simple Pricing to make your Work Effective</h2>
                        <p class="text-muted mb-4">We offer 100% satisafaction and Money back Guarantee</p>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                    <v-col cols="12" md="4" sm="6" v-for="card in pricing" :key="card.caption">
                        <v-card elevation="0" variant="outlined" class="rounded-md pa-sm-8 pa-4">
                            <div class="d-flex justify-space-between">
                                <h4 class="text-subtitle-1 text-muted text-uppercase mb-6" v-text="card.caption"></h4>
                                <v-chip v-if="card.tagtext" size="small" class="mt-sm-n4 font-weight-bold"
                                    color="warning">POPULAR</v-chip>
                            </div>
                            <img :src="card.image" width="90" alt="icon" />
                            <div v-if="card.free" class="d-flex align-center mt-4">
                                <h2 class="text-h2">Free</h2>
                            </div>
                            <div v-else class="d-flex align-center mt-4">
                                <sup class="text-h6 mt-n3 pr-2">$</sup>
                                <h2 v-if="priceplan" class="text-h2">{{ card.yearlyprice }}</h2>
                                <h2 v-else class="text-h2">{{ card.price }}</h2>
                                <span v-if="priceplan" class="text-muted font-weight-medium mt-4 ml-2">/yr</span>
                                <span v-else class="text-muted font-weight-medium mt-4 ml-2">/mo</span>
                            </div>
                            <v-list class="mb-0 pl-0 bg-transparent pt-5">
                                <v-list-item class="px-0" v-for="desc in card.list" :key="desc.listtitle">
                                    <v-list-item-title v-if="desc.status"
                                        class="text-subtitle-1 d-flex align-center font-weight-medium text-muted">
                                        <component :is="desc.icon" :class="'text-' + desc.iconcolor" stroke-width="2"
                                            size="18" class="mr-4" />
                                        {{ desc.listtitle }}
                                    </v-list-item-title>
                                    <v-list-item-title v-else class="text-subtitle-1 d-flex align-center font-weight-medium  text-dark" >
                                        <component :is="desc.icon" :class="'text-' + desc.iconcolor" stroke-width="2"
                                            size="18" class="mr-4" />
                                        {{ desc.listtitle }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                            <v-btn color="primary" size="large" class="mt-6" flat block>{{ card.buttontext }}</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>