export default defineAppConfig({
  ui: {
    primary: 'green',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    card: {
      header: {
        padding: 'px-5 pt-4 pb-0',
      },
      body: {
        padding: 'sm:p-0 sm:pt-4',
      },
    },
    table: {
      thead: 'bg-diventory-white-tertiary',
      tbody: 'p-0',
      th: {
        color: 'text-gray-500',
        size: 'text-base',
      },
    },
    button: {
      rounded: 'rounded-lg',
      padding: {
        sm: 'px-4',
      },
    },
    input: {
      padding: 'py-2',
      base: 'disabled:bg-diventory-gray-25 disabled:opacity-100 disabled:text-diventory-black-secondary',
    },
    select: {
      padding: 'py-2',
    },
    checkbox: {
      base: 'h-5 w-5',
    },
  },
})
