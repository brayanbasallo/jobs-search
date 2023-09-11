<template>
     <li class="mb-7">
        <router-link to="/jobs/tesults/1" class="mx-auto block border border-solid border-brand-gray-2 bg-white hover:shadow-gray">
            <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
                <h2 class="mb-2 text-2xl">
                    Technical Support Engineer
                </h2>
                <div class="flex flex-row align-middle">
                    <div class="mr-5">
                        <span>Bobo</span>
                    </div>
                    <div class="">
                        <span>San Francisco</span>
                    </div>
                </div>
            </div>
            <div class="px-8 py-4">
                <div >
                    <h3 class="mt-1 mb-2">Qualifications</h3>
                    <div>
                        <ul class="list-disc pl-8">
                            <li>Bacherlor's degree or equivalent practical experience</li>
                            <li>5 years of experience in program management</li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ducimus odio 
                                accusantium id! Mollitia nesciunt recusandae, nulla magnam optio fugit earum 
                                officiis officia quam culpa nam laboriosam perspiciatis asperiores reiciendis!
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-2 text-center">
                    <router-link class="text-brand-blue-1" to="/jobs/results/1">
                        Expand
                    </router-link>
                </div>
            </div>
        </router-link>
    </li>
</template>
<script>
export default {
    name: "JobListings",
}
</script>