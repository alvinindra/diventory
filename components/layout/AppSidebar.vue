<template>
  <aside
    class="absolute left-0 top-0 z-9999 flex h-screen w-[258px] flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 border-r-diventory-white-quartenary border">
    <!-- SIDEBAR HEADER -->
    <div class="flex items-center justify-between gap-2 px-6 py-6 mx-auto">
      <a href="index.html">
        <img src="/image/logo-diventory.svg" alt="Logo Diventory">
      </a>

      <button class="block lg:hidden">
        <svg class="fill-current" width="20" height="18" viewBox="0 0 20 18" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
            fill="" />
        </svg>
      </button>
    </div>
    <!-- SIDEBAR HEADER -->

    <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <!-- Sidebar Menu -->
      <nav class="py-4 px-4">
        <!-- Menu Group -->
        <div>
          <ul class="mb-6 flex flex-col gap-2">
            <li>
              <NuxtLink
                class="group relative flex items-center gap-3 rounded-sm py-2 px-4 font-medium text-diventory-black-secondary duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                to="/dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.6667 8.33336C16.6667 8.11234 16.5789 7.90038 16.4227 7.7441C16.2664 7.58782 16.0544 7.50003 15.8334 7.50003C15.6124 7.50003 15.4004 7.58782 15.2441 7.7441C15.0879 7.90038 15.0001 8.11234 15.0001 8.33336H16.6667ZM5.00007 8.33336C5.00007 8.11234 4.91227 7.90038 4.75599 7.7441C4.59971 7.58782 4.38775 7.50003 4.16673 7.50003C3.94572 7.50003 3.73376 7.58782 3.57748 7.7441C3.4212 7.90038 3.3334 8.11234 3.3334 8.33336H5.00007ZM16.9109 10.5892C17.0681 10.741 17.2786 10.825 17.4971 10.8231C17.7156 10.8212 17.9246 10.7335 18.0791 10.579C18.2336 10.4245 18.3212 10.2155 18.3231 9.99703C18.325 9.77853 18.241 9.56803 18.0892 9.41086L16.9109 10.5892ZM10.0001 2.50003L10.5892 1.91086C10.433 1.75463 10.221 1.66687 10.0001 1.66687C9.7791 1.66687 9.56717 1.75463 9.4109 1.91086L10.0001 2.50003ZM1.9109 9.41086C1.83131 9.48773 1.76782 9.57969 1.72415 9.68135C1.68048 9.78302 1.65749 9.89237 1.65653 10.003C1.65556 10.1137 1.67665 10.2234 1.71855 10.3258C1.76045 10.4282 1.82233 10.5213 1.90057 10.5995C1.97882 10.6778 2.07186 10.7396 2.17427 10.7815C2.27669 10.8234 2.38642 10.8445 2.49707 10.8436C2.60772 10.8426 2.71707 10.8196 2.81874 10.7759C2.92041 10.7323 3.01236 10.6688 3.08923 10.5892L1.9109 9.41086ZM5.8334 18.3334H14.1667V16.6667H5.8334V18.3334ZM16.6667 15.8334V8.33336H15.0001V15.8334H16.6667ZM5.00007 15.8334V8.33336H3.3334V15.8334H5.00007ZM18.0892 9.41086L10.5892 1.91086L9.4109 3.08919L16.9109 10.5892L18.0892 9.41086ZM9.4109 1.91086L1.9109 9.41086L3.08923 10.5892L10.5892 3.08919L9.4109 1.91086ZM14.1667 18.3334C14.8298 18.3334 15.4657 18.07 15.9345 17.6011C16.4033 17.1323 16.6667 16.4964 16.6667 15.8334H15.0001C15.0001 16.0544 14.9123 16.2663 14.756 16.4226C14.5997 16.5789 14.3877 16.6667 14.1667 16.6667V18.3334ZM5.8334 16.6667C5.61239 16.6667 5.40043 16.5789 5.24415 16.4226C5.08787 16.2663 5.00007 16.0544 5.00007 15.8334H3.3334C3.3334 16.4964 3.59679 17.1323 4.06563 17.6011C4.53447 18.07 5.17036 18.3334 5.8334 18.3334V16.6667Z"
                    fill="#3A3A3C" fill-opacity="0.6" />
                </svg>

                Dashboard
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="group relative flex items-center gap-3 rounded-sm py-2 px-4 font-medium text-diventory-black-secondary duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                to="/manage/goods">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.3334 2.5H1.66675V7.5H2.50008V16.6667C2.50008 17.1087 2.67568 17.5326 2.98824 17.8452C3.3008 18.1577 3.72472 18.3333 4.16675 18.3333H15.8334C16.2754 18.3333 16.6994 18.1577 17.0119 17.8452C17.3245 17.5326 17.5001 17.1087 17.5001 16.6667V7.5H18.3334V2.5ZM3.33341 4.16667H16.6667V5.83333H3.33341V4.16667ZM15.8334 16.6667H4.16675V7.5H15.8334V16.6667ZM7.50008 9.16667H12.5001C12.5001 9.60869 12.3245 10.0326 12.0119 10.3452C11.6994 10.6577 11.2754 10.8333 10.8334 10.8333H9.16675C8.72472 10.8333 8.3008 10.6577 7.98824 10.3452C7.67568 10.0326 7.50008 9.60869 7.50008 9.16667Z"
                    fill="#3A3A3C" fill-opacity="0.6" />
                </svg>
                Kelola Barang
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="group relative flex items-center gap-3 rounded-sm py-2 px-4 font-medium text-diventory-black-secondary duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                to="/manage/loans">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.8333 4.99992H14.1667C14.1667 2.66659 12.3333 0.833252 10 0.833252C7.66667 0.833252 5.83333 2.66659 5.83333 4.99992H4.16667C3.25 4.99992 2.5 5.74992 2.5 6.66658V16.6666C2.5 17.5833 3.25 18.3333 4.16667 18.3333H15.8333C16.75 18.3333 17.5 17.5833 17.5 16.6666V6.66658C17.5 5.74992 16.75 4.99992 15.8333 4.99992ZM10 2.49992C11.4167 2.49992 12.5 3.58325 12.5 4.99992H7.5C7.5 3.58325 8.58333 2.49992 10 2.49992ZM15.8333 16.6666H4.16667V6.66658H15.8333V16.6666ZM10 9.99992C8.58333 9.99992 7.5 8.91658 7.5 7.49992H5.83333C5.83333 9.83325 7.66667 11.6666 10 11.6666C12.3333 11.6666 14.1667 9.83325 14.1667 7.49992H12.5C12.5 8.91658 11.4167 9.99992 10 9.99992Z"
                    fill="#3A3A3C" fill-opacity="0.6" />
                </svg>

                Kelola Pinjaman
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="group relative flex items-center gap-3 rounded-sm py-2 px-4 font-medium text-diventory-black-secondary duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                to="/manage/users">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.99992 10.8333C12.3011 10.8333 14.1666 8.96785 14.1666 6.66667C14.1666 4.36548 12.3011 2.5 9.99992 2.5C7.69873 2.5 5.83325 4.36548 5.83325 6.66667C5.83325 8.96785 7.69873 10.8333 9.99992 10.8333Z"
                    stroke="#3A3A3C" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M16.6666 17.5002C16.6666 15.7321 15.9642 14.0364 14.714 12.7861C13.4637 11.5359 11.768 10.8335 9.99992 10.8335C8.23181 10.8335 6.53612 11.5359 5.28587 12.7861C4.03563 14.0364 3.33325 15.7321 3.33325 17.5002"
                    stroke="#3A3A3C" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

                Kelola Akun
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Sidebar Menu -->
    </div>
  </aside>
</template>