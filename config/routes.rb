Rails.application.routes.draw do
  #devise_for :users

  #resources :influencers, defaults: {format: :json}, only: [:index, :show]
	#match "/influencers/", :controller => 'influencers'
	Rails.application.routes.draw do
		  get 'influencers/' => 'influencers#index'
	end

end
