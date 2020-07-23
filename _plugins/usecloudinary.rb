Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  out = doc.output
  if ENV["JEKYLL_ENV"] == "production"
    src = '\& src="https://res.cloudinary.com/nztm/image/fetch/c_fit,q_auto,f_auto/\1"'
    srcw = 'src="https://res.cloudinary.com/nztm/image/fetch/w_\2,c_fit,q_auto,f_auto,dpr_2/\1" \&'
    out.gsub!(/data-src=[\"|\'](.*?)[\"|\']/, src)
    out.gsub!(/data-src=[\"|\'](.*?)[\"|\'].*data-width=[\"|\'](.*?)[\"|\']/, srcw)
  else
    src = '\& src="\1"'
    out.gsub!(/data-src=[\"|\'](.*?)[\"|\']/, src)
  end
  doc.output = out
end
