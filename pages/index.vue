<template>
  <h1>CryptoDocs</h1>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${process.env.WEBSITE_URL || "http://localhost:3000"}`,
        },
      ]
    }
  }
}
</script>
