require 'fileutils'
require 'shellwords'
require 'pathname'

test_file = "all.test.ts"
outpath = Pathname.new test_file
exif = Pathname.new('exif.ts')
exif_relative = exif.relative_path_from(outpath)

File.open(outpath, "w") do |file|

  file.puts "import { entries } from \"#{exif_relative}\""
  file.puts 'import { assert, assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";'

  Dir['**/*.{jpg,tiff,tif}'].each do |path|
    filepath = Pathname.new(path)
    file_relative = filepath.relative_path_from(outpath)

    dirname = File.dirname(outpath)
    unless File.directory?(dirname)
      FileUtils.mkdir_p(dirname)
    end

    table = `./rune #{Shellwords.shellescape(path)}` rescue next
    next unless table.size > 0
    file.puts "Deno.test('#{path}', async () => {"
    file.puts "  const path = 'test/#{path}'"
    file.puts "  const result = await entries(path);"
    file.puts "  let entry"

    table.split("\n").each do |tag|
      hex,code,type,count,size,value = tag.split("\t")
      file.puts "  entry = result.find(r => r.tag === #{code})"
      file.puts "  assert(entry, \"Did not find tag #{code}\")"
      file.puts "  if(entry) {"
      file.puts "    assertEquals(entry.type, #{type})"
      file.puts "    assertEquals(entry.count, #{count})"
      file.puts "    assertEquals(entry.size, #{size})"
      case type.to_i
      when 2,7 # String types
        file.puts "    assertEquals(entry.value, \"#{value}\")"
      when 5,10
        if value.include? ','
          file.puts "    assertEquals(entry.value, #{value})"
        else
          file.puts "    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat(\"#{value}\").toPrecision(3))"
        end
      else
        file.puts "    assertEquals(entry.value, #{value})"
      end
      file.puts "  }"
    end
    file.puts "});"
    file.puts ""
  end
end