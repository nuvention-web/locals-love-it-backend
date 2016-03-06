#precompiling all assets
Rails.application.config.assets.precompile += [/.*\.js/, 'application.css', 'my_app.css.scss']
Rails.application.config.assets.precompile += %w( influencers/search.css )
