Rails.application.routes.draw do
  #devise_for :users

	get '/influencers/search', to: 'influencers#search'
  resources :influencers, only: [:index, :show]
	

end
