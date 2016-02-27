Rails.application.routes.draw do
  #devise_for :users

  resources :influencers, only: [:index, :show]
	

end
