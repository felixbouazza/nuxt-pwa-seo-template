<template>
  <div class="flex flex-col h-full">
    <div class="h-40">
      <a href="#">
      <div class="m-0 flex flex-row border border-gray-400 p-3">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 13v7l-8-8 8-8v7h8v2z" />
          </svg>
        </svg>
        <p class="ml-1 font-bold">Back</p>
      </div>
    </a>

    <div class="flex items-center justify-center w-full mb-8 mt-2">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
          />
        </svg>
      </svg>
      <!-- <svg width="24" height="24" viewBox="0 0 24 24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
          />
        </svg>
      </svg> -->
      <div class="mr-5 ml-1">Dark</div>

      <label for="toogleA" class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input id="toogleA" type="checkbox" class="sr-only" />
          <!-- line -->
          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <!-- dot -->
          <div
            class="
              dot
              absolute
              w-6
              h-6
              bg-black
              rounded-full
              shadow
              -left-1
              -top-1
              transition
            "
          ></div>
        </div>
        <!-- label -->
        <div class="ml-3 text-gray-700 font-medium"></div>
      </label>
      <div class="ml-2 mr-1">Light</div>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
          />
        </svg>
      </svg>
    </div>

    <!-- DIV TITRE COLONES -->
    <div class="flex justify-between mx-2 my-2 border">
      <p>DOCUMENTATION</p>
      <p>ENABLE</p>
    </div>
    </div>

    <div class="overflow-y-auto maxheightscroll-preference">
      <ul>
        <Crypto
          v-for="crypto in cryptoList"
          :key="crypto.title"
          :crypto="crypto"
          :isPreference="true"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cryptoList: [],
    };
  },

  async fetch() {
    this.cryptoList = await this.$content("cryptomonnaies").fetch();
  },
};
</script>


<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #ffffff;
}
</style>
