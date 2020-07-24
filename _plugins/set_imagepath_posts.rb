Jekyll::Hooks.register [:pages, :documents], :pre_render do |doc|
  out = doc.content
  articles = %w(tips projects)
  category = doc.data['category']
  if articles.include?(category)
    path = doc.data['slug']
    out.gsub!(/!\[(.*)\]\((.*)\)/, '![\1](/assets/article/'+"#{category}/#{path}"+'/\2)')
    puts "#{category}の記事「#{doc.data['title']}」の画像パスを置き換えました✅"
  end
  doc.content = out
end
