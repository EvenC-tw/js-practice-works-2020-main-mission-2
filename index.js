const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const vm = {
	data: {
		products: [],
	},
	getProducts() {
		axios.get('ec/products').then((res) => {
			const resData = res.data
			const { data } = resData
			vm.data.products = data
			vm.render()
		})
	},
	deleteProduct(event) {
		const {
			target: {
				parentNode: {
					dataset: { id },
				},
			},
		} = event
		axios
			.delete(`admin/ec/product/${id}`)
			.then((res) => {
				vm.getProducts()
			})
			.catch((error) => {
				console.error(error)
			})
	},
	render() {
		$('.product-container').innerHTML = vm.renderProduct()
		$('.btn-get').addEventListener('click', this.getProducts)
		$$('.btn-delete').forEach((btn) => {
			btn.addEventListener('click', this.deleteProduct)
		})
	},
	renderProduct() {
		const {
			data: { products },
		} = vm
		return products
			.map((product, index) => {
				const { title, imageUrl, content, id } = product
				return `
					<div class="flex flex-column product-wrapper" data-id="${id}">
						<p class="title bb l-2 px-2">${title}</p>
						<img class="img" src="${imageUrl[0]}" />
						<span class="bt f-sm content">${content}</span>
					</div>
			`
						// <button type="button" class="btn btn-delete bt"></button>
			})
			.join('')
	},
}
vm.render()
