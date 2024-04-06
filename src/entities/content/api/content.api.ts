import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
	TCategories,
	TCheckWordByCategory,
	TDataItem,
	TDataList
} from '../types/index.type'

export const contentAPI = createApi({
	reducerPath: 'contentAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `http://localhost:5000/api`
	}),
	endpoints: build => ({
		getAllCategoriesWords: build.query<TCategories, unknown>({
			query: () => ({
				url: `/get-all-categories`
			})
		}),
		getWordsByCategory: build.query<TDataList, string>({
			query: category => ({
				url: `/get-words/${category}`
			})
		}),
		getWordByCategory: build.query<TDataItem, string>({
			query: category => ({
				url: `/get-word/${category}`
			})
		}),
		checkWord: build.mutation<{ isValidate: boolean }, TCheckWordByCategory>({
			query: body => ({
				url: `/check-word`,
				method: 'POST',
				body
			})
		})
	})
})

export const {
	useGetAllCategoriesWordsQuery,
	useGetWordsByCategoryQuery,
	useGetWordByCategoryQuery,
	useLazyGetWordByCategoryQuery,
	useCheckWordMutation
} = contentAPI
