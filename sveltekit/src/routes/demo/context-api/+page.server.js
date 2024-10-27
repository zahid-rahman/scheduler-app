export const actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const email = formData.get('email');
      const name = formData.get('name');
      const address = formData.get('address');
      // Process the form data and perform actions

      return { success: true };
    },
  };