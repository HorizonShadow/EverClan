require_relative "base.rb"

module Site
	module Routes
		class Index < Base
			get '/' do
				render_page :index
			end
		end
	end
end