Rails.application.routes.draw do
  #devise_for :users

  resources :influencers, defaults: {format: :json}, only: [:index, :show]

end
