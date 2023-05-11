<script setup lang="ts">
import { ServicesData } from '@/_mockApis/custom-components/index';
</script>
<template>
    <div class="pt-md-15 pt-8">
        <v-container>
            <v-row class="border-bottom pb-md-15 pb-8">
                <v-col cols="12" lg="4" sm="4" v-for="item in ServicesData" :key="item.title">
                    <div class="text-center px-md-10 px-0" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                        <component :is="item.img" class="text-primary" stroke-width="1.5" size="35" />
                        <h4 class="text-h1 text-dark font-weight-bold mt-6 mb-2">{{ item.title }}</h4>
                        <p class="text-muted text-body-1 ">{{ item.desc }}</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>