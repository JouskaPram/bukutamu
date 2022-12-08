<template>
  <div>
    <div class="flex items-center justify-center p-12">
      <!-- Author: FormBold Team -->
      <!-- Learn More: https://formbold.com -->
      <div class="mx-auto w-full max-w-[550px]">
        <form @sumbit.prevent="postAbsen()">
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-white"
            >
              Nama Lengkap
            </label>
            <input
              v-model="form.nama"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-white"
            >
              Email Address
            </label>
            <input
              v-model="form.email"
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="subject"
              class="mb-3 block text-base font-medium text-white"
            >
              Tempat/asal
            </label>
            <input
              v-model="form.asal"
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base font-medium text-white"
            >
              Pesan
            </label>
            <textarea
              v-model="form.pesan"
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import supabase from "vue-supabase";
export default {
  data() {
    return {
      form: {
        id: "",
        nama: "",
        asal: "",
        email: "",
        pesan: "",
      },
    };
  },
  mounted() {
    this.postAbsen();
  },
  methods: {
    async postAbsen() {
      const { data, error } = await this.$supabase.from("absen").insert({
        nama: this.form.nama,
        asal: this.form.asal,
        email: this.form.email,
        pesan: this.form.pesan,
      });
      this.form = data;

      if (error) throw error;
    },
  },
};
</script>
