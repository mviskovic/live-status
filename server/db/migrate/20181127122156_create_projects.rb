class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :blocks do |t|
      t.string :name

      t.timestamps
    end
  end
end
