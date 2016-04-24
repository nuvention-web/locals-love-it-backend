Rails.application.routes.draw do
  devise_for :users, :skip => [:sessions]
  as :user do
	get 'signin' => 'devise/sessions#new', :as => :new_user_session
	post 'signin' => 'devise/sessions#create', :as => :user_session
  end
  root 'influencers#search'
	get '/influencers/search', to: 'influencers#search'
  resources :influencers, only: [:index, :show]
	

end
