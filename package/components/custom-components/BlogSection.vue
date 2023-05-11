<script setup lang="ts">
import { Blog } from '@/_mockApis/custom-components/index';
</script>
<template>
        <div class="py-md-15 py-sm-8">
            <v-container>
                <v-row class="justify-center">
                    <v-col cols="12" sm="8">
                        <div class="text-center">
                            <div class="d-flex align-center mb-5 justify-center" data-aos="fade-right" data-aos-delay="200"
                                data-aos-duration="1000">
                                <span class="bg-success pa-2 rounded-circle mr-2"></span>
                                <h6 class="text-subtitle-1 text-dark font-weight-bold">Blog</h6>
                            </div>
                            <h2 class="text-h2 text-dark mb-3" data-aos="fade-left" data-aos-delay="200"
                                data-aos-duration="1000">Blog section which you can use in your template</h2>
                                <p class="text-muted mb-4">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</p>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="justify-center">
                    <v-col cols="12" md="4" sm="6" v-for="card in Blog" :key="card.title" class="mb-4">
                        <v-card elevation="0" variant="outlined">
                            <div class="hover-card overflow-hidden lh-10 rounded-md rounded-be-0 position-relative">
                                <NuxtLink to="/" class="text-decoration-none">
                                    <v-img :src="card.img" height="250px" alt="post" cover class="zoom-in w-100">
                                    </v-img>
                                </NuxtLink>
                            </div>
                            <div class="pa-4 mt-2">
                                <div class="d-flex justify-space-between align-center">
                                    <p class="text-muted text-subtitle-1">{{ card.date }} • {{ card.view }} </p>
                                    <v-chip color="primary" height="auto" size="small" variant="tonal" rounded="md">{{ card.badge
                                    }}</v-chip>
                                </div>
                                <div class="mt-4">
                                    <h5 class="text-h5 font-weight-bold mb-3 lh-normal">
                                        <NuxtLink class="text-decoration-none text-dark hover-primary" to="/">{{ card.title
                                        }}
                                        </NuxtLink>
                                    </h5>
                                    <p class="text-muted text-subtitle-1 font-weight-regular mb-3">{{ card.desc }}</p>
                                    <span>By<NuxtLink to="/" class="text-dark ml-1"> {{ card.name }}</NuxtLink></span>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
</template>