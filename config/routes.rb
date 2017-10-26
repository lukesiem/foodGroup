Rails.application.routes.draw do

  namespace :api do
    resource :pantry
    resources :potlucks
    resources :groceries
  end

  root to: "home#show"

  # get 'login', to: redirect('/auth/google_oauth2'), as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'home', to: 'home#show'
  get 'profile', to: 'profile#show', as: 'profile'

  get 'api_test', to: 'search#show', as: 'search'

  get '*path', to: 'home#show'

end
