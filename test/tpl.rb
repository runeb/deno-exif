require 'erb'
require 'shellwords'

entries_path = '../exif'
paths = Dir['**/*.jpg'].map do |path|
  table = `./rune #{Shellwords.shellescape(path)}`
  entries = []
  table.split("\n").each do |tag|
    hex,code,type,count,size,value = tag.chomp.split("\t")
    entries << {
      code: code.to_i,
      type: type,
      count: count,
      size: size,
      value: value
    }
  end
  { :file => path, :entries => entries }
end

tpl = File.read('test-template.erb')
renderer = ERB.new(tpl)
puts "output:"
puts output = renderer.result()