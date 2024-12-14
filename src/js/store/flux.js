const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			selectedContact: null,
		},

		//GET
		actions: {

			getContacts: async () => { //async desactiva o desactiva
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Cecilia"); //offset=0&limit=100 esto sirve para limitar la cantidad de info me dara en este caso 100 usuarios offset
					if (!response.ok) throw new Error("Failed to fetch data");

					const data = await response.json();
					setStore({ contacts: data.contacts });//contacts []
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			},

			//POST
			addContact: async (newItem) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Cecilia/contacts", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newItem)
					});

					if (response.ok) {
						getActions().getContacts()
					};

					const addedItem = await response.json();
				} catch (error) {
					console.error("Error adding item:", error);
				}
			},

			//DELETE
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Cecilia/contacts/${id}`, {
						method: "DELETE"
					});

					if (response.ok) {
						getActions().getContacts()
					};

				} catch (error) {
					console.error("Error deleting item:", error);
				}
			},

			//PUT
			editContacts: async (id, newItem) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Cecilia/contacts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newItem)
					});

					if (response.ok) {
						getActions().getContacts()
					};

					const addedItem = await response.json();
				} catch (error) {
					console.error("Error adding item:", error);
				}
			},

			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			},
			setContact: (id) => {
				const contact = getStore().contacts.filter((item) => item.id === id)
				setStore({ selectedContact: contact })
			}
		}
	};
};

export default getState;