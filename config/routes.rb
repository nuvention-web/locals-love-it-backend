Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
	as :user do	
		get 'influencers/new' => 'registrations#new_influencer', user: {user_type: 'influencer'}
	end
  root 'influencers#search'
	get '/influencers/search', to: 'influencers#search'
	get '/influencers/join', to: 'influencers#join'
  resources :influencers, only: [:index, :show]

  # mailbox folder routes
  get "mailbox/inbox" => "mailbox#inbox", as: :mailbox_inbox
  get "mailbox/sent" => "mailbox#sent", as: :mailbox_sent
  get "mailbox/trash" => "mailbox#trash", as: :mailbox_trash
	resources :conversations do
		member do
			post :reply
			post :trash
			post :untrash
		end
	end


end
