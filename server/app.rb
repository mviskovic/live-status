require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/cross_origin'

set :database, 'sqlite3:ls-dev.sqlite3'

cwd = Dir.pwd
Dir["#{cwd}/models/*.rb"].each { |f| require f }

configure do
  enable :cross_origin
end

get '/' do

end

get '*' do
  response.headers['Allow'] = 'GET, POST, OPTIONS'
  response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token'
  response.headers['Access-Control-Allow-Origin'] = '*'
  200
end
