// import modules
import fs from 'fs'

// import functions
import open_page from './open_page.mjs'
import load_images from './load_images.mjs'
import write_file from './write_file.mjs'
import check_page from './check_page.mjs'

// var-s
const base_link = 'https://goldholod.com'
const products_link = 'catalog'

// functions
const parse_sait = async () => {
	// let data = {
	// 	products: [],
	// 	category_links: {},
	// 	category: [],
	// }

	// parse catalog
	for (let i = 0; i < 179; i++) {
		// for (let i = 0; i < 1; i++) {
		const current_link = `${base_link}/${products_link}/?page=${
			i + 1
		}`
		data.products = [
			...data.products,
			...(await open_page(current_link, 'catalog')),
		]
		console.log(`${products_link}?page=${i + 1}`)
	}

	// parse products
	// for (let i = 1600; i < data.products.length; i++) {
	// // for (let i = 0; i < 1; i++) {
	// // for (let i = 1600; i < 2400; i++) {
	// 	const result = [...(await open_page(data.products[i].link, 'product'))]

	// 	Object.assign(data.products[i], result[0])
	// 	Object.assign(data.category_links, result[1])

	// 	console.log(`product === ${i} === ${data.products[i].link} `)
	// }

	// let data = { category_links: {} }

	// add categories links
	// const result = await open_page(
	// 	`${base_link}/${products_link}/`,
	// 	'category-info'
	// )

	// data.category_links = Object.assign({}, result, data.category_links)
	// console.log('category-info')

	// // parse categoryes
	// let i = 0
	// for (const key in data.category_links) {
	// 	const result = await open_page(data.category_links[key], 'category-detail')
	// 	result['name'] = key
	// 	result['link'] = data.category_links[key]

	// 	data.category.push(result)

	// 	i++
	// 	console.log(`category = ${i}`)
	// }

	// let data = JSON.parse(fs.readFileSync('./entry.json')).data

	// load products images
	const data = JSON.parse(fs.readFileSync('./products.json')).data
	load_images(data, 'products')
	// load_images(data, 'category')

	// write file
	// await write_file(data)

	// load additional parent category
	// const data_categoryes = JSON.parse(fs.readFileSync('./categoryes.json')).data
	// // const data_products = JSON.parse(fs.readFileSync('./products.json')).data
	// let parent_category = []

	// for (const iterator in data_categoryes.category_links) {
	// 	const index_link = data_categoryes.category_links[iterator]
	// 	let i = 1
	// 	let result = true

	// 	while (i < 10) {
	// 		const current_link = `${index_link}/?page=${i}`
	// 		result = await open_page(current_link, 'parent-category')
	// 		if (result !== false) parent_category.push({[`${iterator}`]: [...result]})

	// 		//
	// 		console.log(`${index_link}?page=${i}`)
	// 		i++
	// 	}
	// }
	// write file
	// await write_file(parent_category)
}
// launch parse
parse_sait()
