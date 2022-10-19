Rails.application.routes.draw do
	namespace :api do
  	resources :categories, only: [:index]
  	resources :sellers
  	resources :products, only: [:index, :show]
	end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
