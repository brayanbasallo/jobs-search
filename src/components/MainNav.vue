<template>
    <header class="w-full text-sm">
        <div class="fixed top-0 left-0 w-full h-16 bg-white">
            <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8">
                <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
                <h2>
                    Developed by {{ author.firstName }} {{ author.lastName }}
                </h2>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'MainNav',
    data() {
        return {
            company: "Bobo Careers",
            author: {
                firstName: "Brayan",
                lastName: "Basallo Soto",
            }
        }
    },
}
</script>